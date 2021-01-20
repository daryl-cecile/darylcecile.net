
// @ts-ignore
type PyroGistOptions = {
    url?:string,
    name?:string,
    theme?:"normal"|"match"|"dark"|"ultraDark",
    autoFit?:boolean,
    highlight?:boolean
}

async function PyroGist(selector:string, options:PyroGistOptions){
    let element = document.querySelector(selector);
    if (!element){
        throw new Error(`No element was matched by selector "${selector}"`);
    }
    element.classList.add('pyrogist-container');
    let isRemoteEmbed = options.url?.length > 0;
    let file = isRemoteEmbed ? (await PyroGist.getFile(options.url)) : null;
    let bodyContent = element.innerHTML.trim();

    element.innerHTML = "";

    let fileName = options.name ?? "File";

    if (options.theme){
        if (options.theme === "dark"){
            element.classList.add('theme-dark');
        }
        else if (options.theme === "ultraDark"){
            element.classList.add("theme-ultraDark");
        }
        else if (options.theme === "match"){
            element.classList.add("theme-match");
        }
    }

    let htmlEl = document.createElement('pre');
    htmlEl.className = 'pyrogist-body';
    htmlEl.innerHTML = `<code>${isRemoteEmbed ? file.content : bodyContent}</code>`;

    let header = document.createElement('div');
    header.className = 'pyrogist-head';
    header.innerHTML = `${fileName}`;

    let footer = document.createElement('div');
    footer.className = 'pyrogist-foot';

    if (isRemoteEmbed){
        footer.innerHTML = `<div><a href="${file.liveAt}" target="_blank" rel="noopener">View</a> <a target="_blank" rel="noopener" href="${file.downloadUrl}">Raw</a></div>
<div>Embedded via <a target="_blank" rel="noopener" href="https://github.com/daryl-cecile/PyroGist">PyroGist</a></div>`;
    }
    else{
        footer.innerHTML = `<div><a href="#" rel="noopener"></a> <a target="_blank" rel="noopener" href="#"></a></div>
<div>Embed Powered by <a target="_blank" rel="noopener" href="https://github.com/daryl-cecile/PyroGist">PyroGist</a></div>`;
    }

    element.appendChild(header);

    element.appendChild(htmlEl);

    element.appendChild(footer);

    if (options.highlight && window.hasOwnProperty('hljs')) window['hljs'].highlightBlock(htmlEl);

    if (options.autoFit){
        let initialHeight = PyroGist.calcContentHeight(htmlEl.innerHTML.split("\n").length);
        console.log(initialHeight);
        if (initialHeight > 250){
            (<HTMLElement>element).style.height = "310px";
        }

        element.addEventListener('click',function(){
            if (element.classList.contains('full') === false){
                PyroGist.fit(element, htmlEl, header);
            }
        })
    }
}

namespace PyroGist {
    export class File{
        public content:string;
        public downloadUrl:string;
        public liveAt:string;
        public size:number;
        public name:string;
        public sha:string;
    }

    export function fit(element, htmlEl, header){
        if (element.classList.contains('full')){
            element.classList.remove('full');
            if (PyroGist.calcContentHeight(htmlEl.innerHTML.split("\n").length) > 250){
                (<HTMLElement>element).style.height = "290px";
            }
        }
        else{
            element.classList.add('full');
            (<HTMLElement>element).style.height = "100%";

            let btn = document.createElement('button');
            btn.innerHTML = 'shrink';
            header.appendChild(btn);
            btn.addEventListener('click',function(e){
                e.preventDefault();
                e.cancelBubble = true;
                fit(element, htmlEl, header);
                btn.remove();
            });
        }
    }

    export function parseGithubURL(url:string):{ owner:string, repo:string, branch:string, filepath:string }{
        const regex = /.+github\.com\/(?<owner>.+?)\/(?<repo>.+?)\/blob\/(?<branch>.+?)\/(?<filepath>.+)/gm;
        if (regex.test(url)){
            regex.lastIndex = 0;
            let e = regex.exec(url);
            return <any>e.groups;
        }
        throw new Error("Incorrect Github URL formation");
    }

    export async function httpGET(url:string){
        return new Promise<string>(resolve => {
            let httpReq = new XMLHttpRequest();
            httpReq.onload = function(){
                resolve(this.responseText);
            };
            httpReq.open("get", url, true);
            httpReq.send();
        });
    }

    export async function getFile(url:string){
        let githubParts = parseGithubURL(url);
        let meta = await getMetaData(githubParts.owner, githubParts.repo, githubParts.filepath);

        let f = new File();
        f.content = meta.encoding === "base64" ? atob(meta.content) : meta.content;
        f.downloadUrl = meta.download_url;
        f.liveAt = meta.html_url;
        f.size = meta.size;
        f.name = meta.name;
        f.sha = meta.sha;

        return f;
    }

    export async function getMetaData(owner:string, repo:string, filePath:string){
        return JSON.parse( await httpGET(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`) );
    }

    export function calcContentHeight(lineCount:number){
        return ((12 * lineCount) * 1.2)
    }
}