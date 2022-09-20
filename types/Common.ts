export interface user_id {
  id?: string
}
export interface user extends user_id {
  user_name: string,
  first_name: string,
  last_name: string,
  password: string,
  email: string,
  contact_number: string,
  CategoryId?: {},
  permission_id?: {}

}
export interface category_id {
  id?: string,
}
export interface categoryType extends category_id {
  category_name: string,
  category_type: string
}

export interface Company_id {
  id?: string
}
export interface CompanyType extends Company_id {
  company_name: string,
  company_location: string,
  company_reg_no: string,
  company_contact: string,
  company_email: string,
}

export interface Permission_id {
  id?: string
}
export interface PermissionType extends Permission_id {
  permission_name: string,
  permission_role: {}
}
export interface LoginType {
  user_name?: string,
  password: string
}

export interface loginResponse {
  token: string
}