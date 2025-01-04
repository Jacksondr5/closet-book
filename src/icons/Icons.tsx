// This component is just a testing utility.  It's not used in the app.

import { cn } from "~/lib/utils";
import { Belt } from "./Belt";
import { BowTie } from "./BowTie";
import { Fedora } from "./Fedora";
import { Gloves } from "./Gloves";
import { Jacket } from "./Jacket";
import { Loafer } from "./Loafer";
import { Overcoat } from "./Overcoat";
import { OxfordShoe } from "./OxfordShoe";
import { Pants } from "./Pants";
import { Shirt } from "./Shirt";
import { Socks } from "./Socks";
import { Suit } from "./Suit";
import { Sweater } from "./Sweater";
import { Tie } from "./Tie";
import { TopHat } from "./TopHat";
import { Trousers } from "./Trousers";
import { Vest } from "./Vest";
import { type SVGProps } from "react";

const IconBorder = ({
  IconClass,
}: {
  IconClass: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}) => (
  <div className="border-2 border-dashed border-red-500">
    <IconClass />
  </div>
);

export const Icons = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-wrap gap-4 [&_svg]:size-56", className)}>
      <IconBorder IconClass={Belt} />
      <IconBorder IconClass={BowTie} />
      <IconBorder IconClass={Fedora} />
      <IconBorder IconClass={Gloves} />
      <IconBorder IconClass={Jacket} />
      <IconBorder IconClass={Loafer} />
      <IconBorder IconClass={Overcoat} />
      <IconBorder IconClass={OxfordShoe} />
      <IconBorder IconClass={Pants} />
      <IconBorder IconClass={Shirt} />
      <IconBorder IconClass={Socks} />
      <IconBorder IconClass={Suit} />
      <IconBorder IconClass={Sweater} />
      <IconBorder IconClass={Tie} />
      <IconBorder IconClass={TopHat} />
      <IconBorder IconClass={Trousers} />
      <IconBorder IconClass={Vest} />
    </div>
  );
};
