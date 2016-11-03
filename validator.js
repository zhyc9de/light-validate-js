/**
 * @module Validator.validator
 */
import Regular from './validators/regular';
import NumberRange from './validators/number-range';
import Length from './validators/length';
import Email from './validators/email';

module.exports = {
	Regular,
	NumberRange,
	Length,
	Email
};