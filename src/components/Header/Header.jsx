import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
import { MenuItem, Select } from '@mui/material';
import { setCurrency } from 'store/slice';

export const Header = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.currency);
  return (
    <>
      <section className={css.sectionHeader}>
        <header className={css.header}>
          <nav className={css.nav}>
            <NavLink to={'/'}>Exchange</NavLink>
            <NavLink to={'/exchange'}>Home</NavLink>
          </nav>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={e => dispatch(setCurrency(e.target.value))}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'UAH'}>UAH</MenuItem>
            <MenuItem value={'PLZ'}>PLZ</MenuItem>
          </Select>
        </header>
      </section>
      <Outlet />
    </>
  );
};
