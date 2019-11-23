import './NetworkState.css'
import React from 'react'

export default function NetworkState({networkState}) {
    return (
        <div className="NetworkState">
            <p className="NetworkState_text">
                {networkState ? "" : "You are offline. Go online to save this data"}
            </p>
        </div>
    )
}