import Benefit from "./Benefit";
import { MdLocalShipping, MdPayment } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
function Benefits() {
  return (
    <div className=" grid place-content-center md:place-self-center gap-y-12 gap-x-4 w-4/5  mx-auto py-20 md:grid-cols-2 lg:grid-cols-4 ">
      <Benefit
        icon={<MdLocalShipping className="w-10 h-10" />}
        title="Free Shipping"
        desc="Free delivery for all orders"
      />
      <Benefit
        icon={<FaMoneyCheckAlt className="w-10 h-10" />}
        title="Money Guarantee"
        desc="30 days money back"
      />
      <Benefit
        icon={<BiSupport className="w-10 h-10" />}
        title="24/7 Support"
        desc="24/7 customer service"
      />
      <Benefit
        icon={<MdPayment className="w-10 h-10" />}
        title="Secure Payment"
        desc="All cards accepted"
      />
    </div>
  );
}

export default Benefits;
