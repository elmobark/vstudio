
import { boolean, pgTableCreator, varchar } from "drizzle-orm/pg-core";
//  class Competitor {
//     id: string;
//     competitorName: string;
//     sales: string;
//     branchesCount: string;
//     notes: string;
// }
// class ProjectCheckSurveyClass {

//     // basic info
    
//     field: string;
    
//     activity: string;
    
//     projectName: string;
    
//     mgmtAddress: string;
    
//     hasPartners: string;
    
//     numberOfPartners: string;
    
//     percentageOfEachPartner: string;
    
//     // employees
    
//     hasFinancialStatements: string;
    
//     howManyEmployees: string;
    
//     howManyAdminstrators: string;
    
//     numberOfSaudiEmployees: string;
    
//     numberOfForignersEmployees: string;
    
//     // sales
    
//     doYouWantToIncreaseGrowth: string;
    
//     doYouHaveEnoughMoneyToCoverExpensesForThreeMonths: string;
    
//     doesTheCompanyHaveBranches: string;
    
//     whatIsTheAverageSalesForTheBranches: string;
    
//     topBranchName: string;
    
//     topBranchSales: string;
    
//     lowestBranchName: string;
    
//     lowestBranchSales: string;
    
//     averageMonthlySales: string;
    
//     doYouDealWithSuppliers: string;
    
//     // marketing
    
//     haveYouDevelopedAMarketingStrategyPlan: string;
    
//     haveYouEngagedInAnyTypeOfMarketing: string;
    
//     hasDoneMarketingWithTikTok: boolean;
    
//     hasDoneMarketingWithGoogle: boolean;
    
//     hasDoneMarketingWithSnapchat: boolean;
    
//     hasDoneMarketingWithFacebook: boolean;
    
//     howMuchWasSpentOnCampaigns: string;
    
//     whatIsTheReturnOnCampaigns: string;
    
//     doYouHaveAUnifiedIdentity: string;
    
    
//     competitor: Competitor[];
    
//     competitiveAdvantage: string;

    
//     createdBy: mongoose.Types.ObjectId | string;

//     _id: mongoose.Types.ObjectId | string;    
// }
const createTable = pgTableCreator((name) => `vstudio_${name}`);


export const competitor = createTable("competitor", {
    id: varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => crypto.randomUUID()),
    competitorName: varchar("competitor_name", { length: 255 }).notNull(),
    sales: varchar("sales", { length: 255 }).notNull(),
    branchesCount: varchar("branches_count", { length: 255 }).notNull(),
    notes: varchar("notes", { length: 255 }).notNull(),
},
);

// every project check survey have many competitors




export const projectCheckSurvey = createTable("project_check_survey", {
    id: varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => crypto.randomUUID()),
    field: varchar("field", { length: 255 }).notNull(),
    activity: varchar("activity", { length: 255 }).notNull(),
    projectName: varchar("project_name", { length: 255 }).notNull(),
    mgmtAddress: varchar("mgmt_address", { length: 255 }).notNull(),
    hasPartners: varchar("has_partners", { length: 255 }).notNull(),
    numberOfPartners: varchar("number_of_partners", { length: 255 }).notNull(),
    percentageOfEachPartner: varchar("percentage_of_each_partner", { length: 255 }).notNull(),
    hasFinancialStatements: varchar("has_financial_statements", { length: 255 }).notNull(),
    howManyEmployees: varchar("how_many_employees", { length: 255 }).notNull(),
    howManyAdminstrators: varchar("how_many_adminstrators", { length: 255 }).notNull(),
    numberOfSaudiEmployees: varchar("number_of_saudi_employees", { length: 255 }).notNull(),
    numberOfForignersEmployees: varchar("number_of_forigners_employees", { length: 255 }).notNull(),
    doYouWantToIncreaseGrowth: varchar("do_you_want_to_increase_growth", { length: 255 }).notNull(),
    doYouHaveEnoughMoneyToCoverExpensesForThreeMonths: varchar("do_you_have_enough_money_to_cover_expenses_for_three_months", { length: 255 }).notNull(),
    doesTheCompanyHaveBranches: varchar("does_the_company_have_branches", { length: 255 }).notNull(),
    whatIsTheAverageSalesForTheBranches: varchar("what_is_the_average_sales_for_the_branches", { length: 255 }).notNull(),
    topBranchName: varchar("top_branch_name", { length: 255 }).notNull(),
    topBranchSales: varchar("top_branch_sales", { length: 255 }).notNull(),
    lowestBranchName: varchar("lowest_branch_name", { length: 255 }).notNull(),
    lowestBranchSales: varchar("lowest_branch_sales", { length: 255 }).notNull(),
    averageMonthlySales: varchar("average_monthly_sales", { length: 255 }).notNull(),
    doYouDealWithSuppliers: varchar("do_you_deal_with_suppliers", { length: 255 }).notNull(),
    haveYouDevelopedAMarketingStrategyPlan: varchar("have_you_developed_a_marketing_strategy_plan", { length: 255 }).notNull(),
    haveYouEngagedInAnyTypeOfMarketing: varchar("have_you_engaged_in_any_type_of_marketing", { length: 255 }).notNull(),
    hasDoneMarketingWithTikTok: boolean("has_done_marketing_with_tik_tok").notNull().default(false),
    hasDoneMarketingWithGoogle: boolean("has_done_marketing_with_google").notNull().default(false),
    hasDoneMarketingWithSnapchat: boolean("has_done_marketing_with_snapchat").notNull().default(false),
    hasDoneMarketingWithFacebook: boolean("has_done_marketing_with_facebook").notNull().default(false),
    howMuchWasSpentOnCampaigns: varchar("how_much_was_spent_on_campaigns", { length: 255 }).notNull(),
    whatIsTheReturnOnCampaigns: varchar("what_is_the_return_on_campaigns", { length: 255 }).notNull(),
    doYouHaveAUnifiedIdentity: varchar("do_you_have_a_unified_identity", { length: 255 }).notNull(),
    competitor: varchar("competitor", { length: 255 }).notNull(),
    competitiveAdvantage: varchar("competitive_advantage", { length: 255 }).notNull(),
    createdBy: varchar("created_by", { length: 255 }).notNull(),
},);
