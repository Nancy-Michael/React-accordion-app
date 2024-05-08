import React, { useState } from 'react'
import data from './data'
import "./styles.css"

function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiple, setEnableMultiple] = useState(false);
    const [multiSelection, setMultiSelection] = useState([]);

    function handelSingleSelection(getCurrentId) {
        setSelected(getCurrentId ===selected ?null:getCurrentId);
    }

    function handelMultipleSelection(getCurrentId) {
        let cpymultiSelection = [...multiSelection];
        const findIndexOfCurrentId = cpymultiSelection.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) cpymultiSelection.push(getCurrentId)
        else cpymultiSelection.splice(findIndexOfCurrentId, 1);
        setMultiSelection(cpymultiSelection);
    }

  return (
      <div className='wrapper'>
          <button onClick={()=>setEnableMultiple(!enableMultiple)}
          >Enable Multiple selection</button>
            <div className='accordion'>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className='item' key={dataItem.id}>
                            <div onClick={
                                enableMultiple
                                    ? () => handelMultipleSelection(dataItem.id)
                                    : () => handelSingleSelection(dataItem.id)}
                                className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ||
                                    multiSelection.indexOf(dataItem.id)!==-1 ?
                                <div className='content'>
                                      {dataItem.answer}
                                </div>
                                : null
                            }
                        </div>
                ))
                ): (
                    <div>No data was Found!!</div>
              )}
            </div>
      </div>
  )
}

export default Accordian
