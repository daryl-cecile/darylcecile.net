

export default function withTimeout(fn, timeout:number){
	let isCancelled = false;
	let t = setTimeout(()=>{
		if (isCancelled) return;
		fn();
	}, timeout);

	return ()=>{
		isCancelled = true;
		clearTimeout(t);
		t = null;
	}
}