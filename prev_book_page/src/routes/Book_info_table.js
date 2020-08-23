import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import logo1 from './shop_images/1.png';
import logo2 from './shop_images/2.png';
import logo3 from './shop_images/3.png';
import logo4 from './shop_images/4.png';
import logo5 from './shop_images/5.png';

const Book_table = ({ id, price, url }) => {
  return (
    <TableRow>
      <TableCell>
        {id === 1 ? <img src={logo1} /> : null}
        {id === 2 ? <img src={logo2} /> : null}
        {id === 3 ? <img src={logo3} /> : null}
        {id === 4 ? <img src={logo4} /> : null}
        {id === 5 ? <img src={logo5} /> : null}
      </TableCell>
      <TableCell>{url}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>추가하기</TableCell>
    </TableRow>
  );
};

export default Book_table;
