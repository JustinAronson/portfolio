

const FormInput = ({type, labelName, placeholder, val, changeFunction}) => {
  return (
    <div className="p-4">
      <label htmlFor={labelName} className="block">{labelName}</label>
      <input
        type={type}
        id={labelName}
        placeholder={placeholder}
        className={"border w-80 p-2 rounded-sm text-black "}
        value={val}
        onChange={changeFunction}
      />
    </div>
  )
}

export {FormInput};
