interface ButtonProps {
  title: string;
  style: string;
}

export const Button: React.FC<ButtonProps> = ({title, style}) => {
return (
    <div>
        <button className={style}>
            {title}
        </button>
    </div>
)
}