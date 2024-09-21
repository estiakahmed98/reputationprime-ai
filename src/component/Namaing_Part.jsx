import React from 'react';
import { Icon } from '@iconify/react';
import wifiIcon from '@iconify-icons/mdi/wifi';
import arrowDown from '@iconify-icons/mdi/chevron-down';
import arrowLeft from '@iconify-icons/mdi/chevron-left';

function Nameing_Part() {
  return (
    <div className="flex justify-between items-center text-center mt-3 text-white">
      <div className="flex ml-4 ">
        <Icon
            icon={wifiIcon}
            style={{ fontSize: '24px', transform: 'rotate(25.9deg)', color: '#9DBD57' }}
        />
        </div>

      <div className="">Reputation Prime</div>

      <div className="flex items-center space-x-2">
        <Icon icon={arrowDown} style={{ fontSize: '24px' }} />
      </div>

      <div className="flex items-center space-x-2">
        <Icon icon={arrowLeft} style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
}

export default Nameing_Part