'use client';
import React, { useState } from 'react';

const tabData = [
	{
		label: 'Für Paare & Familien',
		services: [
			{
				title: 'für eine Urform Session ',
				image: '1.webp',
				desc: 'Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.',
			},
			{
				title: 'bei Paaren mit Kinderwunsch',
				image: '2.webp',
				desc: 'Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.',
			},
      {
				title: 'für Ahnenfrieden',
				image: '3.webp',
				desc: 'Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.',
			},
			{
				title: 'für Familienentlastung',
				image: '4.webp',
				desc: 'Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.',
			},
		],
	},

	{
		label: 'Für Schwangerschaft, Geburt & Wochenbett',
		services: [
			{
				title: 'Schwangerschaft',
        	image: '6.webp',
				
				desc: 'Individuelle Trauma Release Sitzungen für nachhaltige Entlastung und Heilung.',
			},
			{
				title: 'Geburt',
			image: '7.webp',
				desc: 'Gruppensitzungen für gemeinsames Wachstum und Unterstützung.',
			},
      {
				title: 'Wochenbett',
				image: '5.webp',
				desc: 'Gruppensitzungen für gemeinsames Wachstum und Unterstützung.',
			},
      {
				title: 'für Babys & Kinder',
				image: '8.webp',
				desc: 'Gruppensitzungen für gemeinsames Wachstum und Unterstützung.',
			},
		],
	},
  	{
		label: 'Für sofortige Hilfe',
		services: [
			{
				 title: 'Krankheit',
				image: '9.webp',
				desc: 'Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.',
			},
			{
				title: 'Unfall',
				image: '10.webp',
				desc: 'Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.',
			},
      	{

          title: 'Depression, Stress, BurnOut',
				
				image: '11.webp',
				desc: 'Sanfte Harmonyum Sitzungen für innere Balance und Wohlbefinden.',
			},
			{
				title: 'besonderer Hilfe',
				image: '12.webp',
				desc: 'Intensive Harmonyum Anwendungen für tiefgreifende Entspannung.',
			},
		],
	},
	{
		label: 'Unsere Spezialangebote',
		services: [
			
		
		
      
      	{
				title: 'Retreats',
				image: '15.webp',
				desc: 'Sanfte Harmonyum Sitzungen für innere Balance und Wohlbefinden.',
			},
      	{
				title: 'HTR mit Pferden (coming soon)',
				image: '16.webp',
				desc: 'Intensive Harmonyum Anwendungen für tiefgreifende Entspannung.',
			},
      	{
				title: 'HTR für die Rückgabe inkarnierter Traumafrequenzen',
				image: '14.webp',
				desc: 'Intensive Harmonyum Anwendungen für tiefgreifende Entspannung.',
			},
      {
				title: 'HTR bei kollektiven Traumaerlebnissen',
				image: '13.webp',
				desc: 'Sanfte Harmonyum Sitzungen für innere Balance und Wohlbefinden.',
			},
		],
	},
];

const TherapistServices = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className="relative overflow-hidden pb60">
			<img
				src="/images/bg-2-copyright.png"
				className="w-20 absolute top-20 start-0 sw-anim"
				alt=""
			/>
			<img
				src="/images/misc/flowers-crop-2.webp"
				className="w-30 absolute top-0 start-0 sw-anim"
				alt=""
			/>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 text-center">
						<div className="subtitle mb-3">Meine Angebote</div>
						<h2 className="" data-wow-delay=".2s">
							 Meine <span className="alt-font fw-500 fs-64 id-color-2">
								 angebote
							</span>
						</h2>
						<p className="lead mb-0 ">
						für eine Urform Session
						</p>
						<div className="spacer-single" />
						<div className="spacer-half" />
					</div>
				</div>

				{/* Tabs */}
				<div className="d-flex justify-content-center mb-5 gap-3 flex-wrap">
					{tabData.map((tab, idx) => (
						<button
							key={tab.label}
							className={`btn rounded-7 px-4 py-2  ${
								activeTab === idx ? 'bg-primary text-white' : ' '
							}  fw-bold`}
							onClick={() => setActiveTab(idx)}
						style={{ minWidth: 140, borderRadius: '50px' }}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Tab Content */}
				<div className="row g-4">
			
					{tabData[activeTab].services.map((service, i) => (
						<div key={i} className="col-lg-3 col-sm-6">
							<div className="relative mb-3">
								<a href="#" className="d-block hover mb-3">
									<div className="relative overflow-hidden rounded-20px shadow-soft">
										<img
											src="/images/misc/flowers-crop-3-white.webp"
											className="w-50 end-0 absolute hover-op-0"
											alt=""
										/>
										<div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center">
											<span className="btn-main hover-scale-in-2">
												Read More
											</span>
										</div>
										<img
											src={`/images/services/${service.image}`}
											className="img-fluid hover-scale-1-2"
											alt={service.title}
										/>
									</div>
								</a>
								<h4>{service.title}</h4>
								<p className="no-bottom">{service.desc}</p>
							</div>
						</div>
					))}
				</div>

				<div className="spacer-double" />
			</div>
		</section>
	);
};

export default TherapistServices;
