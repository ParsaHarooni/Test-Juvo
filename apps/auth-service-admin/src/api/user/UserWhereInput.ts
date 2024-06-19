import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isVerified?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  verificationToken?: StringNullableFilter;
};
