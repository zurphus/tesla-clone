import React, {useState, useEffect} from 'react'
import MenuItem from './MenuItem'
import './Menu.css'

function Menu({ isMenuOpen  }) {

  const [show, setShow] = useState(false)

  const checkContainerWidth = () => {
    const bodyWidth = document.body.clientWidth

    setShow(bodyWidth <= 1100)
  };

  useEffect(() => {
      checkContainerWidth();
      window.addEventListener('resize', checkContainerWidth)

      return () => {
          window.removeEventListener('resize', checkContainerWidth)
      };
  }, []);

  return (
    <div className={isMenuOpen  ? 'menu open-menu' : 'menu'}>
        {show ? <MenuItem title="Model S"/> : ''}
        {show ? <MenuItem title="Model 3"/> : ''}
        {show ? <MenuItem title="Model X"/> : ''}
        {show ? <MenuItem title="Model Y"/> : ''}
        <MenuItem title='existing inventory' />
        <MenuItem title='used inventory' />
        <MenuItem title='trade-in' />
        <MenuItem title='cybertruck' />
        <MenuItem title='roadster' />
        <MenuItem title='semi' />
        <MenuItem title='charging' />
        <MenuItem title='powerwall' />
        <MenuItem title='commercial solar' />
        <MenuItem title='test drive' />
        <MenuItem title='find us' />
        <MenuItem title='support' />
        <MenuItem title='united states' />
    </div>
  )
}

export default Menu