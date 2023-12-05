export default function Text(props){
    const {type, placeholder, name, size}  = props;

    return(
        <div className={'relative lg:w-'+size+' w-full container mx-auto mt-2'} >
                <input
              type={type}
              placeholder={placeholder}
              name={name}
              className='w-full py-3 pl-12 pr-4 text-gray-700 border rounded-md outline-none bg-white focus:bg-white focus:border-main-400'
            />
        </div>
    );
}