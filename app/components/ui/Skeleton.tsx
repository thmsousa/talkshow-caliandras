'use client';
import styles from './Skeleton.module.css';

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    className?: string;
}

export const Skeleton = ({ width, height, borderRadius, className }: SkeletonProps) => {
    return (
        <div 
            className={`${styles.skeleton} ${className || ''}`}
            style={{ 
                width: width || '100%', 
                height: height || '20px',
                borderRadius: borderRadius || '4px'
            }}
        />
    );
};

export const CardSkeleton = () => {
    return (
        <div className={styles.cardSkeleton}>
            <Skeleton height="200px" borderRadius="16px" className={styles.mb} />
            <Skeleton width="40%" height="12px" className={styles.mbSmall} />
            <Skeleton width="90%" height="24px" className={styles.mb} />
            <Skeleton width="100%" height="60px" />
        </div>
    );
};
