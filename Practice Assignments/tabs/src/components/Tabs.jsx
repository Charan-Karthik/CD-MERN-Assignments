import React, {useState} from 'react'

const Tabs = () => {
    const [arr] = useState([{"title":'Tab 1', "content":'You are viewing the contents of Tab 1!'}, {"title":'Tab 2', "content":'You are viewing the contents of Tab 2!'}, {"title":'Tab 3', "content":'You are viewing the contents of Tab 3!'}])
    const [tabView, setTabView] = useState(arr[0].content)

    const changeTab = (idx) => {
        console.log(idx);
        setTabView(arr[idx].content)
    }
    
    return (
        <div className='mb-5'>
            <div>
                {arr.map((tabObj, idx) => 
                <div key={idx} className="btn btn-light m-2" onClick={()=>{changeTab(idx)}}>
                    {tabObj.title}
                </div>
                )}
            </div>

            <div className='m-2 d-flex justify-content-center align-items-center' style={{ height:'20vh', width:'50%', borderRadius:'25px', border:'2px solid black'}}>
                <p>{tabView}</p>
            </div>
        </div>
    )
}

export default Tabs