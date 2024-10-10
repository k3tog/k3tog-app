import React, { forwardRef, useCallback, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
  title?: string;
  children: React.ReactNode;
}

const BottomSheet = forwardRef((props: BottomSheetProps, ref: React.Ref<BottomSheetModal>) => {
  const snapPoints = useMemo(() => ['25%', '45%'], []);

  const renderBackdrop = useCallback(
    (backdropProps: any) => <BottomSheetBackdrop {...backdropProps} pressBehavior="close" />,
    [],
  );

  return (
    <BottomSheetModal ref={ref} index={1} snapPoints={snapPoints} backdropComponent={renderBackdrop}>
      <View style={styles.container}>
        {props.title && (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{props.title}</Text>
          </View>
        )}
        {props.children}
      </View>
    </BottomSheetModal>
  );
});

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
    fontFamily: 'Plus Jakarta Sans',
  },
});
