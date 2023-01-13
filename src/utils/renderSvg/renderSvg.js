import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../../svg';
const renderSvg = (name) => {
    switch (name) {
        case 'mercury':
            return <MercurySvg />
        case 'venus':
            return <VenusSvg />
        case 'earth':
            return <EarthSvg />
        case 'mars':
            return <MarsSvg />
        case 'jupiter':
            return <JupiterSvg />
        case 'saturn':
            return <SaturnSvg />
        case 'uranus':
            return <UranusSvg />
        case 'neptune':
            return <NeptuneSvg />
        default:
            return <MercurySvg />;
    }
}

export default renderSvg