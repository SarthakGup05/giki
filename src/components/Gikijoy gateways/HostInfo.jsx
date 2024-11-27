import React from 'react';
import PropTypes from 'prop-types';

const HostInfo = ({ hostName, hostingDuration, checkInExperience, selfCheckIn }) => {
  return (
    <div className="host-info mt-6 p-4 border rounded-lg">
      <h2 className="text-lg font-semibold">Hosted by {hostName}</h2>
      <p className="text-sm text-gray-600">{hostingDuration} hosting</p>
      <p className="mt-2 text-sm">{checkInExperience}</p>
      {selfCheckIn && <p className="text-sm">Self check-in available</p>}
    </div>
  );
};

HostInfo.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostingDuration: PropTypes.string.isRequired,
  checkInExperience: PropTypes.string,
  selfCheckIn: PropTypes.bool,
};

HostInfo.defaultProps = {
  checkInExperience: 'Exceptional check-in experience',
  selfCheckIn: true,
};

export default HostInfo;
