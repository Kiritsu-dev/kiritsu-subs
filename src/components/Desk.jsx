import SubscriptionItem from "./SubscriptionItem";

export default function Desk({title, mark, tone, items, emptyText}) {
    return (
        <>
            <div className={`desk-bar ${tone}`}>
                <h2>{title} <span className="verdict-mark">{mark}</span></h2>
                <span className="desk-count">{items.length} title{items.length == 1 ? "": "s"}</span>
            </div>
            <div className="desk-body">
                {items.length == 0 ? (
                    <div className="desk-empty">{emptyText}</div>
                ) : (
                    items.map((sub) => <SubscriptionItem key ={sub.id} sub = {sub}/> )
                )}
            </div>
        </>
    );
}