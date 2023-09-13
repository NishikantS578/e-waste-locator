'use client'
import React from 'react'
import InfoPage from '@/components/InfoPage'
import {fromLonLat} from 'ol/proj';
import {Point} from 'ol/geom';
import {RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle} from 'rlayers';
const page = () => {
  return (
    <div>
      <InfoPage/>
			<RMap className='example-map' initial={{center: fromLonLat([78.564, 20.82]), zoom: 11}}>
				<ROSM />
				{/*<RLayerVector zIndex={10}>
						<RStyle.RStyle>
						</RStyle.RStyle>
						<RFeature
								geometry={new Point(fromLonLat([2.295, 48.8737]))}
								onClick={(e) =>
										e.map.getView().fit(e.target.getGeometry().getExtent(), {
												duration: 250,
												maxZoom: 15
										})
								}
						>
								<ROverlay className='example-overlay'>
										Arc de Triomphe
										<br />
										<em>&#11017; click to zoom</em>
								</ROverlay>
						</RFeature>
				</RLayerVector>*/}
		</RMap>	
	</div>
  )
}
export default page
