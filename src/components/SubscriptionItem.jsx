import { splitPrice } from "../lib/format";
export default function SubscriptionItem({ sub }) {

    // made a dollar cents objects, with value split + extracted from our sub list
    const {dollars, cents} = splitPrice(sub.price);

    return (
        <div className="item">
            <div className="reveal">
                <span className="r-keep"> Worth it</span>
                <span className="r-cut"> Not Worth it</span>
            </div>
            <div className="item-face">
                <div className="item-name-block">
                    <span className="item-name">{sub.name}</span>
                    <span className="cat-tag">{sub.category}</span>
                </div>
                <div className="item-handle"><span className="arrows">⇆</span> Swipe to judge</div>
                <div className="item-price">
                    {dollars} <span className="cents">.{cents}</span><span className="per">/mo</span>
                </div>
            </div>
        </div>
    );

}