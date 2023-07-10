import React from 'react'

const LoadingScreen = () => {
    return (
        <section className="w-full flex items-center justify-center z-50 absolute">
            <div class="lds-ripple"><div></div><div></div></div>
        </section>
    )
}

export default LoadingScreen