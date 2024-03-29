import React from 'react'

function Home() {
  return (
    <div>
      <div className='esotales-intro' style={{
        backgroundImage: `url("https://images.uesp.net/b/bc/ON-wallpaper-Scions_of_Ithelia-1920x1080.jpg")`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh" }}>
        Welcome to Esotales, your Elder Srolls Online destination! Explore guides, builds, news, and our gallery. Let's conquer Tamriel together!
      </div>
    </div>
  )
}

export default Home