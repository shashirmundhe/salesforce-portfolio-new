trigger LeadScoringTrigger on Lead (before insert, before update) {
    for(Lead l : Trigger.new) {
        Integer score = 0;

        // Condition 1: High Revenue
        if(l.AnnualRevenue != null && l.AnnualRevenue > 1000000) {
            score += 10;
        }

        // Condition 2: IT Industry
        if(l.Industry == 'IT') {
            score += 5;
        }

        // Condition 3: High Budget
        if(l.Budget__c != null && l.Budget__c > 50000) {
            score += 15;
        }

        // Final Score Update
        l.Score__c = score;
    }
}