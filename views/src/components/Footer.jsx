const Footer = () => {
  return (
    <footer className="bg-neutral-700 p-5">
      <div className="flex justify-between text-neutral-100">
        <div>
          <p>&copy; 2023 Flowbite™. All Rights Reserved.</p>
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Privacy Policy</a>
          </li>

          <li>
            <a href="#">Licensing</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
