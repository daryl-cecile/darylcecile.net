import { ImageResponse } from '@vercel/og';

export const config = {
	runtime: 'experimental-edge',
}

export default function(){
	return new ImageResponse(
		(
		  <div
			style={{
			  width: '100%',
			  height: '100%',
			  display: 'flex',
			  alignItems: 'center',
			  justifyContent: 'center',
			  fontSize: 128,
			  background: 'lavender',
			}}
		  >
			<img src={"https://darylcecile.net/images/core/profile.png"} alt="" />
			Hello!
		  </div>
		)
	  )
}