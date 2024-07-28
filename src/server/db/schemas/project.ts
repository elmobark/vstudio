



import { integer, pgTableCreator, varchar } from "drizzle-orm/pg-core";

// export class Product {
//     id: string;
//     title: string;
//     type: string;
//     subType: string;
//     notes?:string;
//     unitPrice: number;
//     taxPercentage: number;
//     unitPriceIncludingTax: number;

//     unitPriceYearIncreasePercent: number;
//     collection: 'SAME_MONTH' | '30_DAYS' | '60_DAYS' | '90_DAYS';

//     firstMonthUnitSales: number;
//     firstMonth: number;

//     unitSalesIncreaseMethod: 'FIXED_VALUE' | 'FIXED_PERCENTAGE' | 'ACCUMULATIVE_PERCENTAGE';
//     unitSalesIncreasePercentage: number

//     directCosts: DirectCost[];

//     totalCost: number;
//     profitAmount: number;
//     profitPercentage: number;

//     transactions: ProductTransaction[];


//     static updateCalculations(product: Partial<Product>) {
//         if (typeof product.unitPrice == 'number' && typeof product.taxPercentage == 'number') {
//             product.unitPriceIncludingTax = (product.taxPercentage || 0) / 100 * product.unitPrice + product.unitPrice;
//         }
//         product.totalCost = (product.directCosts || []).reduce((sum, cv) => (sum + Number(cv.amount) || 0), 0)
//         product.profitAmount = (product.unitPrice || 0) - product.totalCost;
//         if (typeof product.profitAmount == 'number' && typeof product.totalCost == 'number' && product.totalCost != 0) {
//             product.profitPercentage = product.profitAmount / product.totalCost;
//         }
//     }
// }

// export class SubscriptionTransaction {
//     index: number;
//     month: number;
//     year: number;
//     units: number;
//     price: number;
//     sales: number;
//     cost: number;
//     profit: number;
// }

// export class Subscription {
//     id: string;
//     title: string;
//     type: string;
//     subType: string;
//     notes?:string;

//     unitPrice: number;
//     unitPriceYearIncreasePercent: number;

//     taxPercentage: number;
//     unitPriceIncludingTax: number;

//     period: 'MONTH_BY_MONTH' | 'ANNUAL_MONTHLY_COLLECTION' | 'ANNUAL_QUARTER_COLLECTION' | 'ANNUAL_ANNUAL_COLLECTION';
//     renewalsPercentage: number;

//     firstMonthUnitSales: number;
//     firstMonth: number;

//     unitSalesIncreaseMethod: 'FIXED_VALUE' | 'FIXED_PERCENTAGE' | 'ACCUMULATIVE_PERCENTAGE';
//     unitSalesIncreasePercentage: number;

//     directCosts: DirectCost[];

//     totalCost: number;
//     profitAmount: number;
//     profitPercentage: number;

//     transactions: SubscriptionTransaction[];

//     static updateCalculations(subscription: Partial<Subscription>) {
//         if (typeof subscription.unitPrice == 'number' && typeof subscription.taxPercentage == 'number') {
//             subscription.unitPriceIncludingTax = (subscription.taxPercentage || 0) / 100 * subscription.unitPrice + subscription.unitPrice;
//         }
//         subscription.totalCost = (subscription.directCosts || []).reduce((sum, cv) => (sum + Number(cv.amount) || 0), 0)
//         subscription.profitAmount = (subscription.unitPrice || 0) - subscription.totalCost;
//         if (typeof subscription.profitAmount == 'number' && typeof subscription.totalCost == 'number' && subscription.totalCost != 0) {
//             subscription.profitPercentage = subscription.profitAmount / subscription.totalCost;
//         }
//     }

// }

// export class ExpenseTransaction {
//     index: number;
//     month: number;
//     year: number;
//     expense: number;
// }

// export type ExpensePeriod = 'MONTHLY'|'ONCE'|'ANNUAL';
// export class Expense {
//     id: string;
//     title: string;
//     type: string;
//     subType: string;
//     notes?:string;

//     firstMonthAmount: number;
//     firstMonth: number;
//     year?: number;
//     day?: number;
//     period: ExpensePeriod = 'MONTHLY';

//     amountIncreaseMethod: 'FIXED_VALUE' | 'FIXED_PERCENTAGE' | 'ACCUMULATIVE_PERCENTAGE';
//     amountIncreasePercentage: number;

//     transactions: ExpenseTransaction[];
// }

// export class Cost {
//     id: string;
//     title: string;
//     type: string;
//     subType: string;
//     notes?:string;

//     costingMethod: 'PERCENT' | 'UNIT_COST';
//     percentageCost: number;
//     fixedCost: number;
//     productIds: string[];

//     yearIncreasePercent: number;
// }

// export class SalaryBenifit {
//     id: string;
//     title: string;
//     amount: number;
// }
// export class OtherCost {
//     id: string;
//     title: string;
//     amount: number;
// }


// export class EmployeeTransaction {
//     index: number;
//     month: number;
//     year: number;
//     salaryBeforeSupport: number;
//     support: number;
//     salaryAfterSupport: number;
//     initialCost: number;
// }

// export class Employee {
//     id: string;
//     title: string;
//     type: string;
//     subType: string;
//     notes?:string;

//     firstMonthAmount: number;
//     firstMonth: number;

//     nationalityGroup: 'LOCAL' | 'FORIEGNER';
//     employmentType: 'FULL' | 'PARTIAL' | 'REMOTE';
//     supportType: 'NONE' | 'TAMHEER';
//     supportAmount: number;
//     supportMonthes: number;

//     benifits: SalaryBenifit[];
//     totalBenifits: number;

//     totalSalaryBefortSupport: number;
//     totalSalaryAfterSupport: number;

//     otherCosts: OtherCost[];
//     totalOtherCosts: number;

//     productIds: string[];
//     count: number;
//     yearIncreasePercent: number;

//     reportMonthesCount: number;
//     transactions: EmployeeTransaction[];
// }
// export class Labour {
//     id: string;
//     title: string;
//     type: string;
//     subType: string;
//     notes?:string;

//     firstMonthAmount: number;
//     firstMonth: number;

//     count: number;
//     nationalityGroup: 'LOCAL' | 'FORIEGNER';

//     yearIncreasePercent: number;
// }
// export class AssetTransaction {
//     index: number;
//     month: number;
//     year: number;
//     depreciation: number;
//     value: number;
// }
// export class Asset {
//     id: string;
//     title: string;
//     type: string;
//     subType: string;
//     subTypeTitle: string;
//     notes?:string;

//     firstMonthAmount: number;
//     firstMonth: number;

//     amountDecreaseMethod: 'FIXED_VALUE' | 'FIXED_PERCENTAGE' | 'ACCUMULATIVE_PERCENTAGE';
//     amountDecreasePercentage: number;
//     amountDecreaseValue: number;

//     transactions: AssetTransaction[];
// }

// export class FinanceTransaction {
//     index: number;
//     month: number;
//     year: number;
//     payment: number;
//     liability: number;
//     interest: number;
// }

// export class Capital {
//     id: string;
//     title: string;
//     type: string;
//     subType: string;
//     notes?:string;

//     financeAmount: number;
//     firstMonth: number;

//     annualPercentRate: number;
//     monthlyPercentRate: number;
//     interestAmount: number;

//     monthes: number;
//     monthlyPaymentPercentage: number;

//     monthlyBaseValue: number;
//     monthlyInterestValue: number;
//     monthlyPaymentValue: number;

//     transactions: FinanceTransaction[];
// }

// export class ExpenseCategory {
//     id: string;
//     title: string;
//     // items: Array<Expense | Cost>
// }

// export class EmployeeCategory {
//     id: string;
//     title: string;
//     items: Array<Labour | Employee>
// }

// export type BusinessModelCanvasInfo = {
//     keyPartners?: string[];
//     keyActivities?: string[];
//     keyResources?: string[];
//     valuePropositions?: string[];
//     channels?: string[];
//     customerRelationships?: string[];
//     customerSegments?: string[];
//     revenueStreams?: string[];
//     costStructure?: string[];
// }
// export type RecommendationType = {
//     politicalRecommendations ?: string[];
//     economicRecommendations ?: string[];
//     socialRecommendations ?: string[];
//     technologicalRecommendations ?: string[];
//     environmentalRecommendations ?: string[];
//     legalRecommendations ?: string[];
// }

// export type ConclusionType = {
//     politicalConclusion ?: string[];
//     economicConclusion ?: string[];
//     socialConclusion ?: string[];
//     technologicalConclusion ?: string[];
//     environmentalConclusion ?: string[];
//     legalConclusion ?: string[];
// }

// export type FindingType = {
//     politicalFinding ?: string[];
//     economicFinding ?: string[];
//     socialFinding ?: string[];
//     technologicalFinding ?: string[];
//     environmentalFinding ?: string[];
//     legalFinding ?: string[];
// }
// export type PestelInfo = {
//     political?: string[];
//     economic?: string[];
//     social?: string[];
//     technological?: string[];
//     environmental?: string[];
//     legal?: string[];
//     recommendations ?: RecommendationType,
//     finding ?: FindingType,
//     conclusion ?: ConclusionType
// }

// export  type SWOTInfo ={
//     strengths?: string[];
//     weaknesses?: string[];
//     opportunities?: string[];
//     threats?: string[];
//     recommendations?: {
//         strengthsAndOpportunities?: string[];
//         strengthsAndThreats?: string[];
//         weaknessesAndOpportunities?: string[];
//         weaknessesAndThreats?: string[];
//     };
// }

// class ProjectClass {
//     @prop({ required: true })
//     title: string;
//     @prop({})
//     description: string;

//     @prop({})
//     contactNo: string;

//     @prop({})
//     email: string;

//     @prop({})
//     stage: string;

//     @prop({})
//     noOfEmployees: number;

//     @prop({})
//     noOfFounders: number;

//     @prop({})
//     investmentAmount: number;

//     @prop({})
//     isRegistered: boolean;

//     @prop({})
//     deletedAt: Date;

//     @prop({})
//     notes: string;

//     @prop({})
//     products: Product[];

//     @prop({})
//     subscriptions: Subscription[];

//     @prop({})
//     expenses: Expense[];

//     @prop({})
//     expenseCategories: ExpenseCategory[];

//     @prop({})
//     employeeCategories: EmployeeCategory[];


//     @prop()
//     businessModelCanvas: BusinessModelCanvasInfo;

//     @prop()
//     pestelAnalysis: PestelInfo;

//     @prop()
//     swotAnalysis: SWOTInfo;

//     @prop({})
//     costs: Cost[];

//     @prop({})
//     labour: Labour[];

//     @prop({})
//     employees: Employee[];

//     @prop({})
//     assets: Asset[];

//     @prop({})
//     capitals: Capital[];

//     @prop({})
//     createdById: string;

//     _id: mongoose.Types.ObjectId | string;

//     id: string;
// }
// class AssetCategoryClass {
//     @prop({ required: true, unique: true })
//     categoryCode: string;

//     @prop({ required: true, unique: true })
//     title: string;

//     @prop({ required: true })
//     isActive: boolean;

//     @prop({ required: true })
//     annualDepreciationPercentage: number;

//     @prop({ required: true })
//     annualDepreciationType: 'FIXED_VALUE' | 'FIXED_PERCENTAGE' | 'ACCUMULATIVE_PERCENTAGE';

//     _id: mongoose.Types.ObjectId | string;
// }

const createTable = pgTableCreator((name) => `vstudio_${name}`);


export const directCost = createTable("direct_cost", {
    id: varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => crypto.randomUUID()),
    title: varchar("title", { length: 255 }).notNull(),
    amount: integer("amount").notNull(),
},
);

export const productTransaction = createTable("product_transaction", {
    index: integer("index").notNull(),
    month: integer("month").notNull(),
    year: integer("year").notNull(),
    units: integer("units").notNull(),
    price: integer("price").notNull(),
    sales: integer("sales").notNull(),
    cost: integer("cost").notNull(),
    profit: integer("profit").notNull(),
},
);

export const product = createTable("product", {
    id: varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => crypto.randomUUID()),
    title: varchar("title", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 }).notNull(),
    subType: varchar("sub_type", { length: 255 }).notNull(),
    notes: varchar("notes", { length: 255 }),
    unitPrice: integer("unit_price").notNull(),
    taxPercentage: integer("tax_percentage").notNull(),
    unitPriceIncludingTax: integer("unit_price_including_tax").notNull(),
    unitPriceYearIncreasePercent: integer("unit_price_year_increase_percent").notNull(),
    collection: varchar("collection", { length: 255 }).notNull(),
    firstMonthUnitSales: integer("first_month_unit_sales").notNull(),
    firstMonth: integer("first_month").notNull(),
    unitSalesIncreaseMethod: varchar("unit_sales_increase_method", { length: 255 }).notNull(),
    unitSalesIncreasePercentage: integer("unit_sales_increase_percentage").notNull(),
    totalCost: integer("total_cost").notNull(),
    profitAmount: integer("profit_amount").notNull(),
    profitPercentage: integer("profit_percentage").notNull(),
},
);