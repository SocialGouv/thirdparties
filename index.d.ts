type ThirdPartyCheckParams = { url: string };
type ThirdPartyCheckResult = boolean;

type ThirdParty = {
  id: string;
  check: (ThirdPartyCheckParams) => ThirdPartyCheckResult;
  message: string;
};

type ThirdParties = ThirdParty[];
