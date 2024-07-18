interface IListItem {
  name: string;
  email: string;
  phone: string;
  description: string;
}
const ListItem = ({ name, email, phone, description }: IListItem) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="https://random.imagecdn.app/500/150"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {email}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {phone}
        </div>
      </div>
      <div>
        <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {description}
        </p>
      </div>
    </li>
  );
};

export default ListItem;
