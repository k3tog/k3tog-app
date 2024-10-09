import React, { forwardRef, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet = forwardRef((props: BottomSheetProps, ref: React.Ref<BottomSheetModal>) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const renderBackdrop = useCallback(
    (backdropProps: any) => <BottomSheetBackdrop {...backdropProps} pressBehavior="close" />,
    [],
  );

  return (
    <BottomSheetModal ref={ref} index={1} snapPoints={snapPoints} backdropComponent={renderBackdrop}>
      <View style={styles.container}>{props.children}</View>
    </BottomSheetModal>
  );
});

BottomSheet.displayName = 'BottomSheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
});

export default BottomSheet;
