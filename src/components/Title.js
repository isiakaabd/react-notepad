import React from 'react'

function Title() {
  return (
    <div>
      <h2 className="text-center" style={Style}>
        NOTES
      </h2>
    </div>
  )
}

export default React.memo(Title)

const Style = {
  fontSize: '40px',
  fontWeight: '700',
}
