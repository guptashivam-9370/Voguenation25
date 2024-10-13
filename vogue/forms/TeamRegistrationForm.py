from django import forms

class TeamRegistrationForm(forms.Form):
    team_name = forms.CharField(label='Team Name', max_length=100)
    team_leader_name = forms.CharField(label='Team Leader Name', max_length=100)
    team_leader_email = forms.EmailField(label='Team Leader Email')