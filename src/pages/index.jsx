import Link from 'next/link';
import Image from 'next/image';
import SlickSlider from '../components/Slider';
import {
	AnnotationIcon,
	GlobeAltIcon,
	LightningBoltIcon,
	ScaleIcon,
} from '@heroicons/react/outline';
import image1 from '../../public/images/home-1.jpg';
import image2 from '../../public/images/home-2.jpg';
import image3 from '../../public/images/home-3.jpg';
import image4 from '../../public/images/home-4.jpg';
import image5 from '../../public/images/home-5.jpg';
import image6 from '../../public/images/home-6.jpg';
import image7 from '../../public/images/home-7.jpg';
import creativeBanner from '../../public/images/creative-team.jpg';

const features = [
	{
		name: 'İç Mekan Tasarım Hizmetimiz',
		description:
			'Mekanlarınızın tasarımını önce dijital ortamda hazırlıyoruz. Tasarıma onay verdikten sonra imalat ve uygulamayı yapıyoruz...',
		icon: GlobeAltIcon,
	},
	{
		name: 'Estetik Kaygımız',
		description:
			'Sıradanlığın dışında bir estetik kaygımız var. Bu sebeple sizi en iyi yansıtacak tasarım için 7/24 aralıksız çalışıyoruz...',
		icon: ScaleIcon,
	},
	{
		name: 'Metale Hayat Veriyoruz',
		description:
			'Metalin soğuk yüzeyine dokunuyor, tüm enerjimizi mekanlarınız için sıcak ve yumuşak bir hava yatarmak için harzıyoruz...',
		icon: LightningBoltIcon,
	},
	{
		name: 'Butik Üretim Yapıyoruz',
		description:
			'Kişiye özel tasarımlarınızın butik imalatını, adet gözetmeksizin yapıyoruz. Dilerseniz seri üretim bandımız da hizmetinizde...',
		icon: AnnotationIcon,
	},
];

const meta = {
	title: 'Anasayfa',
	description: 'PopArt Metal, Fiber Lazer Metal Kesim ve Dekoratif Metal Duvar Aksesuarları',
	date: '2022-02-24T15:22:00.000Z',
}
export default function Home() {
	const slideFavoritesNext = () => {
		favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
	};
	const slideFavoritesPrev = () => {
		favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
	};
	return (
		<>
			<section className="mt-3 overflow-hidden rounded-3xl bg-blue-100">
				<SlickSlider />
			</section>
			<section className="relative overflow-hidden bg-white">
				<div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
					<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
						<div className="sm:max-w-lg">
							<h1 className="font text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
								Metal ile Sanatın Buluştuğu Yerdesiniz
							</h1>
							<p className="mt-4 text-xl text-gray-500">
								PopArt Metal 20 senedir sektöründe hizmet veren profesyonel bir ekip tarafından
								kurulmuş, sıradışı tasarımlara imza atmaktan, çarpıcı tasarımlarını hayata
								geçirmekten ve yaşam alanlarınızı güzelleştirmekten haz alan bir ekiptir.
							</p>
							<p className="mt-4 text-xl text-gray-500">
								Tasarımlarımızı incelemeden karar vermeyin...
							</p>
						</div>
						<div>
							<div className="mt-6">
								<div
									aria-hidden="true"
									className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
								>
									<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
										<div className="flex items-center space-x-6 lg:space-x-8">
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
													<Image
														alt="PopArt Metal"
														src={image1}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image2}
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image3}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image4}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image5}
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image6}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<Image
														alt="PopArt Metal"
														src={image7}
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<Link href="/products">
									<a className="inline-block rounded-md border border-transparent bg-orange-500 py-3 px-8 text-center font-medium text-white hover:bg-orange-600">
										Ürünlerimiz
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="relative bg-white py-12">
				<div className="absolute top-0 h-10 w-full bg-gradient-to-b from-slate-500/5 to-transparent "></div>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base font-semibold uppercase tracking-wide text-orange-500">
							Neden Biz?
						</h2>
						<p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
							Metale Şekil Değil, Hayat Veriyoruz..!
						</p>
						<p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
							Farkı bakış açımız, profesyonel kadromuz, kaliteli ve uygun işçiliğimiz, sektördeki 20
							senelik tecrübemiz ile yaşam alanlarınızı güzelleştiriyoruz.
						</p>
					</div>
					<div className="mt-10">
						<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
							{features.map((feature) => (
								<div key={feature.name} className="relative">
									<dt>
										<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
											<feature.icon className="h-6 w-6" aria-hidden="true" />
										</div>
										<p className="ml-16 text-lg font-medium leading-6 text-gray-900">
											{feature.name}
										</p>
									</dt>
									<dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</section>
			<section className="relative overflow-hidden bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
						<svg
							className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>
						<div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>
						<div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<div className="sm:text-center lg:text-left">
								<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block xl:inline">Tasarım ekibimiz </span>
									<span className="block text-orange-500 xl:inline">sizin için hazır</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
									Mekanlarınız için tasarım ekibimizin ön çalışma yapmasını ister misiniz? Hemen
									bizimle iletişime geçin. Hayata farklı bir pencereden bakmanız için ofisimizde
									kahvenizi yudumlarken size kendimizi anlatalım...
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<Link href="/meeting">
											<a className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 md:py-4 md:px-10 md:text-lg">
												Randevu Alın
											</a>
										</Link>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<Link href="/contact">
											<a className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-100 px-8 py-3 text-base font-medium text-orange-700 hover:bg-orange-200 md:py-4 md:px-10 md:text-lg">
												İletişime Geçin
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
						alt="PopArt Metal"
						src={creativeBanner}
					/>
				</div>
			</section>
		</>
	);
}

Home.layoutProps = { meta };
