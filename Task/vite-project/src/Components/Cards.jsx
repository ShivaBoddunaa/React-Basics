
export default function Cards(){


return (

<>
<div className="p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* DRAMA CARD */}
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">DRAMA GENRE</h2>
        <p>🎭 Emotion-driven stories that explore human relationships, conflicts, and personal journeys.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">OPEN</button>
        </div>
      </div>
    </div>

    {/* ACTION CARD */}
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">ACTION GENRE</h2>
        <p>💥 Fast-paced narratives packed with physical conflict, high stakes, and adrenaline-filled moments.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">OPEN</button>
        </div>
      </div>
    </div>

    {/* SCI-FI CARD */}
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">SCI-FI GENRE</h2>
        <p>🚀 Stories that imagine futuristic technology, alternate realities, or scientific possibilities beyond today’s world.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">OPEN</button>
        </div>
      </div>
    </div>
 
  </div>
</div>

</>


)



}





// export default function Cards(){


// return(
// <>
// <div className="card w-96 bg-base-100 card-xs shadow-sm">
//   <div className="card-body">
//     <h2 className="card-title">DRAMA GENERE</h2>
//     <p>🎭Emotion-driven stories that explore human relationships, conflicts, and personal journeys.</p>
//     <div className="justify-end card-actions">
//       <button className="btn btn-primary">OPEN</button>
//     </div>
//   </div>
// </div>

// <div className="card w-96 bg-base-100 card-xs shadow-sm">
//   <div className="card-body">
//     <h2 className="card-title">ACTION GENERE</h2>
//     <p>💥Fast-paced narratives packed with physical conflict, high stakes, and adrenaline-filled moments</p>
//     <div className="justify-end card-actions">
//       <button className="btn btn-primary">OPEN</button>
//     </div>
//   </div>
// </div>

// <div className="card w-96 bg-base-100 card-xs shadow-sm">
//   <div className="card-body">
//     <h2 className="card-title">SCI-FI GENERE</h2>
//     <p>🚀Stories that imagine futuristic technology, alternate realities, or scientific possibilities beyond today’s world.</p>
//     <div className="justify-end card-actions">
//       <button className="btn btn-primary">OPEN</button>
//     </div>
//   </div>
// </div>

// </>
// )
// }

