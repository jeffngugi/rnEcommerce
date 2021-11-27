import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const  GradientStyle = ({ children, style }) => {
  return (
      <LinearGradient
      style={{...style}}
      colors={['#2A034B', '#691fa4']}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      >
      {children}
    </LinearGradient>
  );
};

export default GradientStyle

// colors={['#34283E', '#845FA1']}