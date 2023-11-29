import plainwhiteConfig from '../plainwhite.config';

const {
    plainwhite: { date_format, date_locale },
} = plainwhiteConfig;

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(date_locale, date_format);

export default formatDate;
