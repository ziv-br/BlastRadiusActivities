import React from "react";

interface ThinkerProps {
	className?: string;
}

const Thinker: React.FunctionComponent<ThinkerProps> = ({className}) => {
	return <div className={["Thinker", className].filter(i => !!i).join(" ")} />;
};

export default Thinker;

import "./Thinker.style";
