import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { VerifyIcon } from '../Icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7102465899470258181~c5_720x720.jpeg?x-expires=1659189600&x-signature=1f1WcYcbhhE836nZl5Hz9RaYHf0%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Cao Văn Tân
                    <VerifyIcon />
                </h4>
                <p className={cx('username')}>CaoVanTan</p>
            </div>
        </div>
    );
}

export default AccountItem;
