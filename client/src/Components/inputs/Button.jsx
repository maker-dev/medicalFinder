export default function Button(props){
    const {text,size} = props;

    return(
        <div className={'relative w-'+size+' container mx-auto mt-2'}>
            <button className="bg-main-400 hover:bg-main-500 text-white m active:bg-main-600 w-full h-11 flex items-center justify-center rounded-md">{text}</button>
        </div>
        
    );
}