import React from "react";

declare type LayoutOptions = {
	children: React.ReactNode
	home?: boolean
	showBackBtn?: boolean
}

declare type Note = {
	[name:string]:any
	date: string
	lastUpdated?: string
	slug:string
	content:string
	renderedContent:string
	readTime: string
	hidden?:boolean
}

declare type Project = {
	name: string
	id: string
	summary: string
	startYear: number
	endYear?: number
	logo:string
	link:string
	tokens:string[]
}