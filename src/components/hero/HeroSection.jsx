import useHeroContext from "./HeroContext"


const HeroSection = () => {

    const {data} = useHeroContext()

    return (
        <>
          {data}
        </>
    )
}

export default HeroSection
