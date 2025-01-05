import React from 'react'

function UserInput({onChange,userInput}) {


  return (
        <section id = 'user-input'>
            <div className="input-group">
                <p>
                <lablel> Initial Investment</lablel>
                <input type = 'number'  value={userInput.initialInvestment} required onChange={(event)=>onChange('initialInvestment',event.target.value)}/>
                </p>
                <p>
                <lablel>Annual Investment</lablel>
                <input type = 'number'value={userInput.annualInvestment} required onChange={(event)=>onChange('annualInvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                <lablel>Expected Return</lablel>
                <input type = 'number' value={userInput.expectedReturn} required onChange={(event)=>onChange('expectedReturn',event.target.value)}/>
                </p>
                <p>
                <lablel>Duration</lablel>
                <input type = 'number' value={userInput.duration} required onChange={(event)=>onChange('duration',event.target.value)} />
                </p>
            </div>
            
            
        </section>
  )
}

export default UserInput;
