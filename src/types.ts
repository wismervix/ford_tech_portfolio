export interface DonationData {
  amount: number;
  frequency: "one-time" | "monthly";
  programme: string;
  donorName: string;
  donorEmail: string;
  isAnonymous: boolean;
}
