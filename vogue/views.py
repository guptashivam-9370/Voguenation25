from django.shortcuts import render
from .forms.TeamRegistrationForm import TeamRegistrationForm
from .models import Team, Member_Detail, Competition, Role

def register(request):
    if request.method == 'POST':
        form = TeamRegistrationForm(request.POST)
        if form.is_valid():
            competition = Competition.objects.get(id=form.cleaned_data['competition_id'])
            team = Team.objects.create(
                team_name=form.cleaned_data['team_name'],
                competition=competition,
                prev_performance=form.cleaned_data.get('prev_performance', '')
            )
            
            # Save team members
            for i in range(1, len(request.POST)//2 - 1):  # Dynamically check the number of members
                member_name = request.POST.get(f'member_name_{i}')
                member_email = request.POST.get(f'member_email_{i}')
                member_phone = request.POST.get(f'member_phone_{i}')
                member_city = request.POST.get(f'member_city_{i}')
                member_gender = request.POST.get(f'member_gender_{i}')
                member_postal_code = request.POST.get(f'member_postal_code_{i}')
                member_role_id = request.POST.get(f'member_role_{i}')
                member_is_leader = request.POST.get(f'member_is_leader_{i}', False)

                if member_name and member_email:
                    role = Role.objects.get(id=member_role_id)
                    Member_Detail.objects.create(
                        name=member_name,
                        email=member_email,
                        phone_number=member_phone,
                        your_city=member_city,
                        gender=member_gender,
                        Postal_code=member_postal_code,
                        is_leader=member_is_leader,
                        team=team,
                        competition=competition,
                        role=role
                    )
        return render(request, 'vogue/registration/success.html', {'form': form})
    else:
        form = TeamRegistrationForm()
    return render(request, 'vogue/registration/register.html', {'form': form})

def success(request):
    return render(request,'vogue/registration/success.html')

def landing_page(request):
    return render(request,'vogue/index.html')