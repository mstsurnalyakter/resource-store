
import useTheme from '../context/theme';

const ThemeButton = () => {
    const { themeMode, darkTheme, lightTheme } = useTheme();

    const onChangeBtn = (e) =>{
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    }
  return (
    <div>
      <label
        htmlFor="Toggle1"
        className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800"
      >
        <span>Left</span>
        <span className="relative">
          <input onChange={onChangeBtn}  checked={themeMode==="dark"}  id="Toggle1" type="checkbox" className="hidden peer" />
          <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-violet-600"></div>
          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
        </span>
        <span>Right</span>
      </label>
    </div>
  );
}

export default ThemeButton