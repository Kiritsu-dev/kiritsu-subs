import {today} from '../lib/format.js'

export default function Nameplate() {
    return (
        <header className="nameplate">
            <div className='nameplate-top'>
                <span>No. 06 . Personal Edition</span>
                <span>{today()}</span>
            </div>
            <h1><span className='the'>The</span> Kiritsu Review</h1>
            <p className='standfirst'>A standing verdict on everything you pay for, month after month.</p>
            <hr className='nameplate-rule' />
        </header>
    );
}