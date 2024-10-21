from django.shortcuts import render
from .forms.TeamRegistrationForm import TeamRegistrationForm
from .models import Team,TeamMember
from django.conf import settings
from django.core.mail import EmailMessage,BadHeaderError
from django.http import HttpResponse


def register(request):
    if request.method == 'POST':
        form = TeamRegistrationForm(request.POST)
        if form.is_valid():
            team = Team.objects.create(
                team_name=form.cleaned_data['team_name'],
                team_leader_name=form.cleaned_data['team_leader_name'],
                team_leader_email=form.cleaned_data['team_leader_email']
            )
            
            # Save team members
            for i in range(1, len(request.POST)//2 - 1):  # Dynamically check the number of members
                member_name = request.POST.get(f'member_name_{i}')
                member_email = request.POST.get(f'member_email_{i}')
                if member_name and member_email:
                    TeamMember.objects.create(
                        team=team,
                        member_name=member_name,
                        member_email=member_email
                    )
            try:
                email = EmailMessage(
                    'Team Registration Confirmation',
                    f'Dear {team.team_leader_name},\n\nYour team "{team.team_name}" has been successfully registered.',
                    settings.DEFAULT_FROM_EMAIL,
                    [team.team_leader_email],
                )
                email.send(fail_silently=False)
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            except Exception as e:
                return HttpResponse(f"An error occurred while sending email: {str(e)}")
        return render(request, 'registration/success.html', {'form': form})
    else:
        form = TeamRegistrationForm()

    return render(request, 'registration/register.html', {'form': form})

def success(request):
    return render(request,'registration/success.html')

def landing_page(request):
    return render(request,'landing.html')