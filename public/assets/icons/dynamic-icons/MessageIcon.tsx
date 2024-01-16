const CategoryIcon = ({ color = "#565656" }: { color: string }) => {
    return (
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="message square">
            <path id="Union" d="M3.1247 22.8079L2.5 22.0271H2.5L3.1247 22.8079ZM6.70192 19.9462L6.07722 19.1653L6.70192 19.9462ZM2.5 6.10791C2.5 3.89877 4.29086 2.10791 6.5 2.10791V0.10791C3.18629 0.10791 0.5 2.7942 0.5 6.10791H2.5ZM2.5 13.1827V6.10791H0.5V13.1827H2.5ZM2.5 14.5079V13.1827H0.5V14.5079H2.5ZM2.5 22.0271V14.5079H0.5V22.0271H2.5ZM2.5 22.0271L2.5 22.0271H0.5C0.5 23.7041 2.43987 24.6364 3.74939 23.5888L2.5 22.0271ZM6.07722 19.1653L2.5 22.0271L3.74939 23.5888L7.32661 20.727L6.07722 19.1653ZM19.5 18.5079H7.95131V20.5079H19.5V18.5079ZM23.5 14.5079C23.5 16.7171 21.7091 18.5079 19.5 18.5079V20.5079C22.8137 20.5079 25.5 17.8216 25.5 14.5079H23.5ZM23.5 6.10791V14.5079H25.5V6.10791H23.5ZM19.5 2.10791C21.7091 2.10791 23.5 3.89877 23.5 6.10791H25.5C25.5 2.7942 22.8137 0.10791 19.5 0.10791V2.10791ZM6.5 2.10791H19.5V0.10791H6.5V2.10791ZM7.32661 20.727C7.50392 20.5852 7.72424 20.5079 7.95131 20.5079V18.5079C7.27009 18.5079 6.60916 18.7398 6.07722 19.1653L7.32661 20.727Z" fill={color}/>
            <g id="Dots">
            <circle id="Ellipse 37" cx="7.30664" cy="10.3655" r="1.4375" fill={color}/>
            <circle id="Ellipse 38" cx="13.0566" cy="10.3655" r="1.4375" fill={color}/>
            <circle id="Ellipse 39" cx="18.8066" cy="10.3655" r="1.4375" fill={color}/>
            </g>
            </g>
        </svg>

    );
}
 
export default CategoryIcon;