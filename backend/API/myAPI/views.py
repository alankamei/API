from django.contrib.auth import authenticate
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer, LoginSerializer
from django.shortcuts import render


def home(request):
    return render(request, 'Home.html')

class SignupView(generics.CreateAPIView):
    serializer_class = SignupSerializer

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # Automatically raises an error if invalid
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')

        user = authenticate(username=email, password=password)

        if user is not None:
            # Here you can return user data or a token
            return Response({'message': 'Login successful!', 'user': {'email': user.email, 'username': user.username}}, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
