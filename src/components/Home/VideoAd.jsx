import "../../index.css"

const VideoAd = () => {
  return (
    <section data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
      <iframe className="rounded" width="100%" height="415" src="https://www.youtube.com/embed/nhPkMa0oNyI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    </section>
  )
}

export default VideoAd